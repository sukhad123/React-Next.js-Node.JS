import { useForm } from 'react-hook-form';
import HomeLayout from '@/components/HomeLayout'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { authenticateUser } from '@/lib/authenticate'

export default function SignIn() {
    const history = useRouter();

    const [error, setError] = useState('');
    const [warning, setWarning] = useState('');


    const { register, handleSubmit, setValue, formState: { errors } } = useForm(({
        defaultValues: {
            userName: "",
            password: ""
        }
    }))
   async function submitForm(data, e) {
        console.log(data);
        e.preventDefault();
        //this is way via axios
        //axios({
        //    // Endpoint to send files
        //    url: "http://localhost:5000/signIn",
        //    method: "POST",
        //    headers: {
        //        'content-type': 'application/json',
        //    },
        //    data: data,
        //}).then(response => {

        //    if (response.data == "Success")
        //    {

        //            history.push('/products');

        //        }
        //    //I got the response
        //    console.log(response.data);
        //    setError(response.data);

        //    // Handle success response
        //    /* history.push('/signIn')*/
        //}).catch(err => {
        //    //set the error if there is an error
        //    console.log("Error:" + err);
        //});
        try {
            await authenticateUser(data.userName, data.password);
            history.push('/products');
        } catch (err) {
            setWarning(err.message);
        }
    }
    return (<>
        <HomeLayout>

            <div className="signUpfirst">
                <div className="signUpHeader">
                    <h1 className=" header italic">Sign In</h1>
                </div>
                <div className="formRegister">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="flex">
                            <div className="label">
                                <label className="font-serif">UserName</label>
                            </div>
                            <div>
                                <div className="textEnd">
                                    <input className="input font-serif text-white " type="text" {...register("userName", { required: true })} />
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="label">

                                <label className="font-serif">Password</label>
                            </div>
                            <div>
                                <div className="text-end">
                                    <input className="input font-serif text-white " type="password" {...register("password", { required: true })} />
                                </div>
                            </div>
                        </div>
                        <div>
                            {errors.userName?.type === "required" && <span className=" font-serif  text-red-500"><br />User Name is required</span>}
                            {errors.password?.type === "required" && <span className=" font-serif  text-red-500"><br />Password is required</span>}
                            
                        </div>
                        {error && <span className=" font-serif  text-red-500"><br />{error}</span>}
                         
                        <div className="bttn">
                            <button type="submit" disabled= {Object.keys(errors).length > 0}  className=" btn-color margin     text-color font-bold py-2 px-4 round">
                                Sign In

                            </button>
                        </div>



                    </form>
                </div>

            </div>

        </HomeLayout>
    </>
    )
}