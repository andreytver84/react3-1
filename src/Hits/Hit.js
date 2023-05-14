import Card from "./Card";

const data = [
    {
        img: 'https://avatars.mds.yandex.net/i?id=659382f8b7a820fa2e7ff7211efcdf7f42a49e1a-9265564-images-thumbs&n=13',
        name: 'Malificenta',
        hits: 3
    },
    {
        img: 'https://horrorzone.ru/uploads/2-photos-and-pictures/movie-photos/t/thor-the-dark-world/thor-the-dark-world01.jpg',
        name: 'TOR 2',
        hits: 1
    },
    {
        img: 'https://fb.ru/media/i/2/2/1/4/0/5/6/i/2214056.jpg',
        name: 'Titanic',
        hits: 10
    },
    {
        img: 'https://images.hdqwalls.com/download/2014-the-hobbit-2048x2048.jpg',
        name: 'Hobit'
    }
]

function Hit() {
    return (
        <>
            {
                data.map((h,i) => <Card key={i} data={data[i]} />)
            }
        </>
    )
}

export default Hit;