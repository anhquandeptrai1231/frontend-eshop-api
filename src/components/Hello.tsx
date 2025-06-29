interface HelloProps{
    ten : string;
    tuoi : number;

}
function Hello({ten , tuoi } : HelloProps){
    return (
        <div>
            <h2>Xin chao {ten}!</h2>
            <p>Nam nay minh {tuoi} tuoi.</p>
        </div>

    );
}
export default Hello;