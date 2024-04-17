import { useForm } from 'react-hook-form';
import react from 'react';
import HomeLayout from '@/components/HomeLayout'
import axios from "axios";
import { useRouter } from 'next/router';
import {useState } from 'react'

export default function SignUp() {
    const history = useRouter();

    //Initially  the error is empty
    const [error, setError] = useState('');

    

    const { register, handleSubmit, setValue, formState: { errors } } = useForm(({
        defaultValues: {
            userName: "",
            password: "",
            password1: "",
        }
    }))
    function submitForm(data,e) {
             e.preventDefault();
        
 
            axios({
                // Endpoint to send files
                url: "http://localhost:5000/signUp",
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                data: data,
            }).then(response => {

                if (response.data == "Success") {
                    history.push('/signIn');
                    response.data = "";
                }
                //I got the response
                 
                setError(response.data);
                
            }). catch (err => {
            //set the error if there is an error
            console.log("Error:" +err);
    });

       

    
       
    }
    return (<>
        <HomeLayout>

            <div className="signUpfirst">
                <div className  = "signUpHeader">
                    <h1 className =" header italic">Sign Up</h1>
                </div>
                <div className="formRegister">
                    <form  onSubmit={handleSubmit(submitForm)}>
                    <div className = "flex">
                        <div className = "label">
                            <label className="font-serif">UserName</label>
                        </div>
                        <div>
                            <div className = "textEnd">
                                    <input className="input font-serif text-white " type="text" {...register("userName", { required: true })} />
                                   
                            </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className = "label">

                                <label className="font-serif">Password</label>
                            </div>
                            <div>
                                <div className="text-end">
                                    <input className="input font-serif text-white " type="password" {...register("password", { required: true })} />
                                   
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="label">
                                <label className="font-serif">Confirm Password</label>
                            </div>
                            <div>
                                <div className="text-end">

                                    <input className="input font-serif text-white " type="password" {...register("password1", { required: true })} />
                                   

                                </div>
                            </div>
                        </div>

                        <div>
                            {errors.userName?.type === "required" && <span className=" font-serif  text-red-500"><br />User Name is required</span>}
                            {errors.password?.type === "required" && <span className=" font-serif  text-red-500"><br />Password is required</span>}
                            {errors.password1?.type === "required" && <span className= " font-serif  text-red-500"><br />Confirm Password is required</span>}
                        </div>
                        {error && <span className=" font-serif  text-red-500"><br />{error}</span> }
                        <div className= "bttn">
                            <button type="submit" disabled={Object.keys(errors).length > 0} className=" btn-color margin     text-color font-bold py-2 px-4 round">
                                Sign Up

                            </button>
                        </div>
                        

                    
                    </form>
                </div>
           
            </div>

        </HomeLayout>
    </>
    )
}