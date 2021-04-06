import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { getCookie } from './functionCookies';
let context;
let saveFile;
const Dictaphone = ({ socket, setMessage, messageCheck }) => {
    const {
        interimTranscript,
        finalTranscript,
        listening,
    } = useSpeechRecognition();
    // console.log(IDofRoom.length, ArrIDofAllMemberInRoom)
    useEffect(() => {
        saveFile = "";
        setMessage(".");
        socket.emit("saveFile", [getCookie("username"), saveFile]);
    }, [messageCheck, socket, setMessage])

    useEffect(() => {
        setMessage(interimTranscript)
        if (interimTranscript !== '') {
            context = interimTranscript;
            // setMessage(context);
            // if (IDofRoom.length !== 0) {
            //     socket.emit("monopoly", ["updateTextChat", IDofRoom, getCookie("username"), interimTranscript, ArrIDofAllMemberInRoom]);
            // }
        }
        if (interimTranscript === '' && saveFile !== '') {
            console.log("saveFile==========", saveFile)
            saveFile += context;
        }
    }, [interimTranscript, finalTranscript, socket, setMessage]);
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
    }

    const listenContinuously = () => {
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-GB',
        });
    };
    return (
        <div className="row" style={{ height: "30px" }}>
            <div className="col-md-1">
                <b>{' '}{listening ? 'Listening' : 'Stop!'}</b>
            </div>
            <div className="col-md-2">
                <button style={{ marginRight: "6px" }} type="button" className="btn btn-sm btn-outline-primary" onClick={listenContinuously} >Listen</button>
                <button type="button" className="btn btn-sm btn-outline-primary ml-1" onClick={SpeechRecognition.stopListening}>Stop</button>
            </div>
            <div className="col-md-8">
                <span>{context}</span>
            </div>
            {/* <div className="col-md-6" style={{ maxHeight: "120px", overflow: "auto" }}>
                <span>{transcript}</span>
            </div> */}
        </div >
    );
};

export { Dictaphone };

