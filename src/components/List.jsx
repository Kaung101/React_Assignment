import Card from "./Card";
import "../styles/Card.css"

export default function List({users}){

    const arr = [
        {
            "name": "John Doe",
            "job": 'Engineer',
            "hobby": 'Listen to music'
        },
        {
            "name": "John Smith",
            "job": 'Programmer',
            "hobby": 'Running'
        },
        {
            "name": "John Roe",
            "job": 'Farmer',
            "hobby": 'Swimming'
        }
    ]

    //render List into the Card
    const ListOfCards = arr.map((el) => {
            return (
                <Card user={el} />
            );
        }) 
    return (
        <div>{ListOfCards}</div>
    );
}