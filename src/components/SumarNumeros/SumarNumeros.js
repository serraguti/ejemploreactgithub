import batman from './../../assets/images/batman.jpeg';


function SumarNumeros() {
    var imagesize = {
        width: "150px", height: "150px"
    };

    const sumarNumero = (numero1, numero2) => {
        var suma = numero1 + numero2;
        console.log("La suma es " + suma);
    };

    return (<div className="App">
            <h1>Ejemplo sumar números básico</h1>
            <img src={batman} className="App-logo" style={imagesize}/>
            <button onClick={() => sumarNumero(5,9)}>
                Sumar números
            </button>
        </div>);
}

export default SumarNumeros;