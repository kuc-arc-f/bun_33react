import Head from '../components/Head'
import ClientUtil from './lib/ClientUtil';
import HttpCommon from "./lib/HttpCommon";
//
export default function Page() {
  //
  const procSend = async function(){
    //location.reload();
    try {
      console.log("#procSend");
      const values = ClientUtil.getInputValue("form1"); 
      console.log(values);
      const json = await HttpCommon.post(values, "/api/mail/send");
      console.log(json);
      if(json.ret !== 200){
        alert("Error, send-mail");
      }else{
        alert("OK");
        location.href = '/';
      }
    } catch (e) {
      console.error(e);
    } 
  }
  //
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <h1 className="text-4xl text-gray-700 font-bold my-2"
    >MailTest</h1>
    <hr />
    <div class="form-group" id="form1">
      <label for="">to_mail :</label>
      <input type="text" className="form-control" defaultValue=""
      id="to_mail" name="to_mail" />
      <hr />
      <label for="">Subject :</label>
      <input type="text" className="form-control" defaultValue=""
      id="subject" name="subject" />
      <hr />
      <label for="">mail_body :</label>
      <input type="passtextword" className="form-control" 
      defaultValue="" id="mail_body" name="mail_body" />
      <hr />
      <button onClick={()=>procSend()}>Send</button>
    </div>
  </div>
  )
}
//export default Page;