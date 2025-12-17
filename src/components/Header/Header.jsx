import React from 'react'
import { FcTodoList } from "react-icons/fc";
import './Header.css'

export default function Header() {
    return (
        <div className='d-flex mt-5 shadow-lg rounded-5 mx-auto' id='Header-container'>
            <FcTodoList id='BookIcon' className='colorized' />
            <h1 className='fw-bolder pt-2 ps-3 typing'>Hossein React<span className='colorized'> To-Do </span>List</h1>
        </div >
    )
}
