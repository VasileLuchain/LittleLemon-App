import './index.css';
import heroImg from "./Images/heroImg.jpg";

const Home = () => {
    return (
        <main className='homepage-main'>
            <section className='hero-bg'>
                <header className='hero-head'>
                    <h1 className='hero-title'>Little Lemon</h1>
                    <h3 className='hero-sub'>Chicago</h3>
                    <p className='hero-desc'>A brief description the the restaurant, what its about, 
                        and what the menu has to offer for the customers.</p>
                    <button className='hero-btn'>Reserve a table</button>
                </header>
                 <img src={heroImg} className='hero-img' alt='Header'/>
            </section>

            <section className='specials'>
                <h3>Specials</h3>
                <article className='specials-item'>
                    <h4>Dish Name</h4>
                    <p>Description of dish</p>
                </article>
                <article className='specials-item'>
                    <h4>Dish Name</h4>
                    <p>Description of dish</p>
                </article>
            </section>

            <section className='reviews'>
                <article className='user-review'>
                    <h4>Rating /5</h4>
                    <p>Review</p>
                    <p>User Profile</p>
                </article>
            </section>

            <section className='about'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>A description of the restaurant. This can include, how the restaurant started out, where it is based from, what kind of food they specialise in. 
                A second paragraph about the owners of the restaurant Adrian and Mario, where they are from and how they started working on the restaurant, creating it, in what it is today.</p>
            </section>
        </main>
    )
}



export default Home;