import React from "react";
import classes from './Bookmark.module.scss'
import Button from "../../components/base/button/Button";
import Post from "../../components/post/Post"

export default class Bookmark extends React.Component {
    state = {
        report: [],
        loadValue: 0,
        localStorageArr: [],
        checkArr: []
    }

    async loadInfo(n = 0) {
        try {
            let loadValue = this.state.loadValue
            let url = `https://www.reddit.com/r/cats.json?&limit=${loadValue + n}&raw_json=1`;
            let response = await fetch(url);
            let report = await response.json();
            loadValue += 25

            let newArr = [];
            report.data.children.map((item) => {
                if ((item.data.media || item.data.preview && item.data.preview.images[0].resolutions[2])) {

                    const parent_img = (item.data.preview.enabled !== false
                        && item.data.preview.images[0].resolutions[2].url !== undefined) ?
                        item.data.preview.images[0].resolutions[2].url
                        : ''

                    newArr.push({
                        id: item.data.id,
                        title: item.data.title,
                        url: item.data.url,
                        author: item.data.author,
                        small_img: parent_img,
                        video: item.data.media,
                        res: item.data.preview.images[0].resolutions,
                    });
                }
            });

            this.setState({
                report: newArr,
                loadValue
            })
        }
        catch(e) {
            console.log(e)
        }

    }

    onAddClickHandler = (event) => {
        const item = event.target.parentNode.id
        let localStorageArr = [...this.state.localStorageArr]
        localStorageArr.push(item)

        localStorage.setItem('localStorageArr', JSON.stringify(localStorageArr));

        this.setState({
            localStorageArr
        })
    }

    onRemoveClickHandler= (event) => {
        const item = event.target.parentNode.id
        let localStorageArr = [...this.state.localStorageArr]

        const index = localStorageArr.indexOf(item);
        if (index > -1) {
            localStorageArr.splice(index, 1);
        }

        localStorage.setItem('localStorageArr', JSON.stringify(localStorageArr));

        this.setState({
            localStorageArr
        })
    }

    checkLocalStorage() {
        const localStorageArr = JSON.parse(localStorage.getItem("localStorageArr"));

        this.setState({
            localStorageArr
        })
    }

    componentDidMount() {
        this.checkLocalStorage();
        this.loadInfo(50);
    }


    render() {
        return (
            <React.Fragment>
                <div className={classes.Bookmark}>
                    {
                        this.state.report.map(item => {
                            return (
                                <React.Fragment>
                                    {
                                        (this.state.localStorageArr.indexOf( item.id ) !== -1)
                                            ? <Post
                                                item={item}
                                                localStorageArr={this.state.localStorageArr}
                                                add={this.onAddClickHandler}
                                                remove={this.onRemoveClickHandler}
                                                key={item.id}
                                            />
                                            : null
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                {
                    (this.state.localStorageArr.length !== 0) ?
                        <Button
                            onClick={this.loadInfo.bind(this, 25)}
                            text={'Load More'}
                        />
                        : <p className={classes.Message}>No bookmarks</p>
                }
            </React.Fragment>
        )
    }
}