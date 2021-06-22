import React, { useEffect, useRef, useState, useCallback } from "react";
import './App.css'
import Peer, { MediaConnection } from "skyway-js"

const VideoBody = () => {
    const LocalVideoRef = useRef<HTMLVideoElement>(null)
    const RemoteVideoRef = useRef<HTMLVideoElement>(null)
    const peer = new Peer({key: "4f0d4cf8-ca05-4d1b-8828-77980e8fe7bd",debug:3})
    const [myId , setMyId] = useState("")
    const [theirId, setTheirId] = useState("")
    const [mediaConnection, setMediaConnection] = useState<MediaConnection>()
    let localStream:MediaStream
    
    
    const getMyId = useCallback(()=>{
        peer.on("open",()=>{console.log("open")})
        setMyId(peer.id)
    },[])
    
    const callThier = useCallback(()=>{
        const mediaConnection = peer.call(theirId,localStream)
        setMediaConnection(mediaConnection)
    },[])

    peer.on("call",mediaConnection =>{
        console.log("called")
        mediaConnection.answer(localStream)
        mediaConnection.on("stream",stream=>{
            if(RemoteVideoRef.current){
                RemoteVideoRef.current.srcObject = stream;
                RemoteVideoRef.current.play();
            }
        })
    })


    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video:true, audio:true})
        .then(stream =>{
            if(LocalVideoRef.current){
                LocalVideoRef.current.srcObject = stream
                localStream = stream
                LocalVideoRef.current.play();
            }
        }).catch(err=>{
            console.log(err)
        })
    })

    return (
        <>
        <video ref={LocalVideoRef} autoPlay　className="Round" width="320" height="100%" ></video>
        <button onClick={getMyId}>番号を取得</button>
        <p id="skyId">{myId}</p>
        <input onChange={(e)=>{setTheirId(e.target.value)}}></input>
        <button onClick={callThier}>発信</button>
        <video ref={RemoteVideoRef} autoPlay ></video>
        
        </>
    )
}

export default VideoBody;