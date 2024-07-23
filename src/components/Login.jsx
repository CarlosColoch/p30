import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const user={
        email:"practica",
        password: "29"
    };

    
    const onSubmit = (data) => {
        console.log(data);

        localStorage.setItem('user', JSON.stringify(data));

        let obje = JSON.parse(localStorage.getItem("user"));

        if(obje.email === user.email && obje.password === user.password) 
        {
           // alert(obje.email + user.email + " /." + obje.password + user.password);
            navigate('/');
        } else { 
            alert("Contraseña incorrecta.");
        };
    };

    return (
    <body class="bg-lime-400 p-5">
    <form action="" className="m-5 border bg-blue w-80 mx-auto mt-8 rounded-lg p-6" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="bg-lime-600 text-azul-oscuro">Acceso a la biblioteca : Tailwind - CSS</h2>    
        <div className="mb-3">
            <label>Usuario.....: </label>
            <input placeholder="email" type="text" className="form-control" {...register('email')} />
        </div>
        <div className="mb-3">
            <label>Password..: </label>
            <input  placeholder="contraseña" type="password" className="form-control" {...register('password')} />
        </div>
        <input className="bg-blue-500 w-full py-2 text-green text-5x1 rounded-md cursor-pointer hover:bg-400" type="submit" value="Ingresar"/>
     </form>
     </body>
     )
}

export default Login;
