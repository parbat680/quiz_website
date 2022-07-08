import takequiz from './takequiz.svg';

function Quiz(props) {
    return (
        <div className='Quiz' style={
            { border: `2px solid ${props.border_color}`, boxShadow: `0px 0px 5px 0px ${props.border_color},`
            ,width:'50%',margin:'0 auto',marginTop:'20px',color:'white',
            width:'max-content'
            
            }}>
            <b>{props.name} Quizes</b>
            <div className='Description'>
                <p>{props.description}</p>
            </div>
            <img className='TakeQuiz'  src={takequiz} alt='Take Quiz'></img>
        </div>
    );

}
export default Quiz;