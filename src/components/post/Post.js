import React from "react";
import classes from './Post.module.scss'
import Button from "../../components/base/button/Button";

export default class Post extends React.Component {

    render() {
        return (
            <div className={classes.Post} key={this.props.item.id} id={this.props.item.id}>
                <h1 className={classes.Title}>{this.props.item.title}</h1>
                <div className={classes.ImgBlock}>
                    {
                        (this.props.item.video === null)
                            ? <img src={this.props.item.small_img} alt={Math.random()} className={classes.Img}/>
                            : <iframe src={this.props.item.video.reddit_video.fallback_url} width="240" frameBorder="1"></iframe>
                    }

                </div>
                <p className={classes.Author}><span className={classes.Bold}>Author:</span> {this.props.item.author}</p>

                {
                    (this.props.localStorageArr.indexOf(this.props.item.id) == -1)
                        ?
                        <Button
                            onClick={this.props.add}
                            text={'Add bookmark'}
                            type={'add'}
                        />
                        :
                        <Button
                            onClick={this.props.remove}
                            text={'Remove bookmark'}
                            type={'remove'}
                        />
                }
            </div>
        )
    }
}