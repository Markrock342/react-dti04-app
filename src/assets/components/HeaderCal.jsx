import React from "react";

export default function HeaderCal(props) {
    return (
        <div>
            <h1 style={{textAlign:'center', color: props.titleColor || '#333'}}>{props.titlename}</h1>
            {props.imgname && (
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px'}}>
                    <img style={{width:'100px', height:'100px'}} src={props.imgname} alt="header" />
                </div>
            )}
        </div>
    );
}