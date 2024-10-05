//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
//
function Page() {
    return (
    <div>
        <a href="/">[ Home ]</a>
        <a href="/mail_test" className="ms-2">&nbsp; [ MailTest ]</a>
        <a href="/login" className="ms-2">&nbsp; [ Login ]</a>
        <hr />
    </div>
    );
}
export default Page;
/*
<a href="/about" className="ms-2">&nbsp; [ about ]</a>
<a href="/button" className="ms-2">&nbsp; [ button ]</a>
<a href="/card" className="ms-2">&nbsp; [ Card ]</a>
*/