import React from 'react';

import ProgressiveImage from "./ProgressiveImage";

import FacebookLogo from "../icons/facebookLogo";
import InstagramLogo from "../icons/InstagramLogo";
import VkLogo from "../icons/VkLogo";

const Post = (props) => (
    <div className={"post"}>
        <div className="choose">
            <VkLogo
                className={'icon'}
            />
            <InstagramLogo
                className={'icon'}
            />
            <FacebookLogo
                className={'icon'}
            />
        </div>
        <div className="post-content">
            <div className="images">

            </div>
        </div>

    </div>
);

export default Post