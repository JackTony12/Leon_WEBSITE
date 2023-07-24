import React from 'react'
import blender from "../icons/blender.webp"
import bootstrap from "../icons/bootstrap.webp"
import css from "../icons/css.webp"
import firebase from "../icons/firebase.webp"
import git from "../icons/git.webp"
import github from "../icons/github.webp"
import html from "../icons/html.webp"
import js from "../icons/js.webp"
import mysql from "../icons/mysql.png"
import office from "../icons/office.webp"
import reactIcon from "../icons/react.webp"
import sass from "../icons/sass.webp"
import three from "../icons/three.webp"
import {AiOutlineInfoCircle} from "react-icons/ai";

export function Iconos() {
    const icons = [blender,bootstrap,css,firebase,git,github,html,js,mysql,office,reactIcon,sass,three];
    const names = ['Blender','Bootstrap','Css 3','Firebase','Git','Github','Html 5','Javascript','Mysql','Office','React','Sass','Three.js']
    const urls =['https://www.blender.org/','https://getbootstrap.com/','https://developer.mozilla.org/es/docs/Web/CSS','https://firebase.google.com/','https://git-scm.com/','https://github.com/','https://developer.mozilla.org/es/docs/Web/HTML','https://developer.mozilla.org/es/docs/Web/JavaScript','https://www.mysql.com/','https://www.office.com/','https://es.react.dev/','https://sass-lang.com/','https://threejs.org/']
  return (
    <>
    {
        icons.map((item,index)=>{
            return(

                <div data-text={names[index]} className='icon-skill' key={item}>
                  <img src={item} alt={names[index]} className='icon' />
                  <a href={urls[index]} target='_blank'  className='info-skill'><AiOutlineInfoCircle/></a>
                </div>
            )

        })
    }
    </>
  )
}
