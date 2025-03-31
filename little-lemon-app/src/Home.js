import './index.css';
import heroImg from "./Images/heroImg.jpg";
import greekSalad from "./Images/greek salad.jpg";
import lemonCake from "./Images/lemon dessert.jpg";
import bruchetta from "./Images/bruchetta.svg";

const Home = () => {
    return (
        <main className='homepage-main'>
            <section className='hero-bg'>
                <header className='hero-head'>
                    <h1 className='hero-title'>Little Lemon</h1>
                    <h3 className='hero-sub'>Chicago</h3>
                    <p className='hero-desc'>Little Lemon brings Mediteranian and Italian food together
                        creating masterpices. Everything handcrafted here in the Little Lemon kitchen for you to enjoy.
                    </p>
                    <button className='hero-btn'>Reserve a table</button>
                </header>
                <img src={heroImg} className='hero-img' alt='Header'/>
            </section>

            <section className='specials'>
                <h1 className='special-title'>Specials</h1>
                <button className='menu-btn'>Online Menu</button>
                <section className='special-display'>
                    <article className='specials-item'>
                        <img src={bruchetta} alt="Bruchetta"/>
                        <section className="info">
                            <h4>Bruchetta <span className="price">£5.50</span></h4>
                            <p>Popular Italian appetizer consisting of grilled bread, spread with garlic sauce and topped with a mixture of fresh tomatoes, basil, olive oil, salt and pepper.</p>
                            <a href='#' className='order-link'>Oreder for Delivery</a>
                        </section>
                    </article>
                    <article className='specials-item'>
                        <img src={greekSalad} alt="Greek-Salad"/>
                        <section className='info'>
                            <h4>Greek Salad<span className="price">£5.50</span></h4>
                            <p>Vibrant and refreshing salad. Containing ckuncky cut tomatoes, cucumbers, red onions, green bell peppers, Kalamata olives and feta cheese, dressed with olive oil, lemon juice and origano.</p>
                            <a href='#' className='order-link'>Oreder for Delivery</a>
                        </section>
                    </article>
                    <article className='specials-item'>
                        <img src={lemonCake} alr="Lemon-Dessert"/>
                        <section className='info'>
                            <h4>Lemon Cake<span className="price">£5.50</span></h4>
                            <p>Dense, flavorful and very popular cake. Each layer conatining lemon zest, with fluffy texture, combined with sweet lemon icing inbetween each layer, further enhancing the flavour.</p>
                            <a href='#' className='order-link'>Oreder for Delivery</a>
                        </section>
                    </article>
                </section>
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