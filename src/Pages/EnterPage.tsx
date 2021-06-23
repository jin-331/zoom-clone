import React, {useRef, useEffect} from 'react'
import "../App.css"
import LocalVideo from '../Components/LocalVideo'
import {setMyId, setLocalStream} from '../Slicers/videoSetterSlice';
import {useAppSelector, useAppDispatch}from '../hooks';

const EnterPage = () => {
	const LocalVideoRef = useRef<HTMLVideoElement>(null)
	const myId = useAppSelector((state)=>state.videoSetter.myId)
	const dispatch = useAppDispatch()

	useEffect(()=>{
		navigator.mediaDevices.getUserMedia({video:true, audio:true})
		.then(stream =>{
		    if(LocalVideoRef.current){
			LocalVideoRef.current.srcObject = stream
			const s:MediaStream = stream
			dispatch(setLocalStream(s))
			LocalVideoRef.current.play();
		    }
		}).catch(err=>{
		    console.log(err)
		})
	    },[])

	return (
		<div className="EnterPage">
			<LocalVideo videoRef={LocalVideoRef}/>
			<p>{myId}</p>
			<button>ルームを作成する</button>
		</div>
	)
}

export default EnterPage;