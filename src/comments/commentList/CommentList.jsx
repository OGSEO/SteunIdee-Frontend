import {useEffect, useState} from "react";
import ApiService from "../../service/ApiService.js";
import ErrorPage from "../../pages/ErrorPage.jsx";
import CommentListItem from "../commentListItem/CommentListItem.jsx";
import './CommentList.css';

export default function CommentList({comments}) {
    console.log(comments);


    return (
        <ul>
            {comments != null ? ( comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <CommentListItem comment={comment}/>
                    </li>
                )
            })) : (
                <div>
                    geen comments
                </div>
            )}
        </ul>
    )
}