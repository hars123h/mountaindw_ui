import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useState, useLayoutEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QRCode from "react-qr-code";
import { useContext } from 'react';
import { AmountContext } from '../App';
import axios from 'axios';
import BASE_URL from '../api_url';

//#df1f26
const Invite = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const amountDetails = useContext(AmountContext);
    const [cb, setCb] = useState({
        value: '',
        copied: false
    });
    const [toasterShow, setToasterShow] = useState(false);
    const [toasterText, setToasterText] = useState('');

    const toaster = (text) => {
        setToasterText(text);
        setToasterShow(true);
        setTimeout(() => {
            setToasterShow(false);
            //navigate('/mine');
        }, 5000);
    }

    const getUserDetails = async () => {
        const details = await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') })
            .then(({ data }) => data);
        setUserDetails(details);
    }

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#78b41d";
        getUserDetails();
        setLoading(false);
    }, []);

    if (loading || userDetails === null) {
        return (
            <div className='h-screen grid place-items-center'>
                <div>Loading...</div>
            </div>
        )
    }
    //[#2e9afe]
    return (
        <div className=' bg-red-800  flex flex-col text-white font-light p-5 relative'>
            {toasterShow ? <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex gap-2 bg-black opacity-100 text-white px-2 py-1 rounded-md'>
                    <div>{toasterText}</div>
                </div>
            </div> : null}
            <div className="top p-3 cursor-pointer flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => navigate(-1)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  storke-white  cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span className='ml-1'>back</span>
            </div>

            <div className="info  sm:text-xs md:text-md flex flex-col gap-2 rounded-lg bg-white  font-semibold mt-5">
                <div className='text-center bg-[#78b41d] rounded-t-lg py-1 text-white text-lg border-b border-red-800'>Agent Rewards</div>
                <span className='p-2 text-black'>
                    Level 1 = <span className='text-red-700'> {amountDetails.level1_percent}%</span>
                    <br />
                    Level 2 = <span className='text-red-700'> {amountDetails.level2_percent}%</span>
                    <br />
                    Level 3 = <span className='text-red-700'> {amountDetails.level3_percent}%</span>
                </span>
            </div>

            <div className="flex gap-2">

                <div className="info w-1/2 p-3 sm:text-xs md:text-md flex flex-col gap-2 rounded-lg bg-white text-red-800 font-bold mt-5">
                    <div className='font-bold'>Invitation Link</div>
                    <div className='p-3 rounded-md border overflow-hidden border-red-800'>{`https://www.fiberrjio5g888.site/register/invite_code/${userDetails.user_invite}`}</div>
                    <CopyToClipboard text={`https://www.fiberrjio5g888.site/register/invite_code/${userDetails.user_invite}`} onCopy={() => toaster('Copied to clipboard')}>
                        <span className='mx-auto bg-red-800 text-white p-2 rounded-md'>Copy Link</span>
                    </CopyToClipboard>
                </div>

                <div className="info w-1/2 p-3 sm:text-xs md:text-md flex flex-col gap-2 rounded-lg bg-white text-red-800 font-bold mt-5">
                    <div className='font-bold'>Invitation code</div>
                    <div className='p-3 rounded-md border border-red-800'>{userDetails.user_invite}</div>
                    <CopyToClipboard text={userDetails.user_invite} onCopy={() => toaster('Copied to clipboard')}>
                        <span className='mx-auto bg-red-800 text-white p-2 rounded-md'>Copy code</span>
                    </CopyToClipboard>
                </div>
            </div>


            <div className="qr mx-auto flex flex-col justify-center items-center mt-4 p-3 bg-white rounded-md">
                <QRCode
                    size={120}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={`https://www.fiberrjio5g888.site/register/invite_code/${userDetails.user_invite}`}
                    viewBox={`0 0 120 120`}
                />
                <div className='text-red-800 font-extrabold text-center mt-1'>QR code</div>
            </div>
        </div>
    )
}

export default Invite