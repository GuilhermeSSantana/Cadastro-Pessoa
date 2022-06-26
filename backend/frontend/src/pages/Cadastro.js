import React, { useState } from 'react';
import { Field, Formik } from 'formik';
//import '.././styles/cadastro.css';



function Cadastro() {
    const [value, onChange] = useState(new Date());


    return (
        < div className='container' >
            
            <div className='fundo'>
                <div className='titulo'>
                    <h1>Cadastro de Refeicoes </h1>
                </div>

                <div className='formulario'>

                    <Formik
                        initialValues={{
                            iten1: '',
                            iten2: '',
                            iten3: '',
                            iten4: '',
                            iten5: '',
                        }}
                      

                        render={({ values }) => (
                            
                            <form className='itens'>
                                <div className='itens-l'>
                                    <label>Itema </label>
                                    <Field type='text' name='iten1' />
                                </div>

                                <div className='itens-l'>
                                    <label>Item2 </label>
                                    <Field type='text' name='iten2' />
                                </div>

                                <div className='itens-l'>
                                    <label>Item3 </label>
                                    <Field type='text' name='iten3' />
                                </div>

                                <div className='itens-l'>
                                    <label>Item4 </label>
                                    <Field type='text' name='iten4' />
                                </div>

                                <div className='itens-l'>
                                    <label>Item5 </label>
                                    <Field type='text' name='iten5'/>
                                </div>

                                {/* <button className="bottom-cadastro">Entrar</button> */}
                            </form>
                        )}
                 
                    />
                </div>

                {/* <div className='calendario'>
                    <Calendar onChange={onChange} value={value} />
                </div> */}

            </div>
        </div >
    );
}
export default Cadastro;
