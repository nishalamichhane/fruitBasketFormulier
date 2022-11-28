import React, {useState} from 'react';
import './App.css';
import Counter from "./Component/Counter";
import Button from "./Component/Button";
import Formulier from "./Component/Formulier";
function App() {
    const [countArdbei, setCountArdbei] = useState( 0)
    const [countBananen, setCountBananen] = useState( 0)
    const [countAppels, setCountAppels] = useState( 0)
    const [countKiwis, setCountKiwis] = useState( 0)

    const [voornaam, setVoornaam] = useState('');
    const [achternaam, setAchternaam] = useState('');
    const [leeftijd, setLeeftijd] = useState(0);
    const [postcode, setPostcode] = useState('');
    const [bezorg, toggleBezorg] = useState('');
    const [tijd, toggleTijd] = useState('');
    const [message, setMessage] = useState('');
    const [voorwaard, setVoorwaard] = useState('');

    function resetBtn() {
        setCountArdbei(0)
        setCountBananen(0)
        setCountAppels(0)
        setCountKiwis(0)
    }

    function handleChange(e) {
        e.preventDefault();
        console.log(`
    Voornaam: ${voornaam}, 
    Achternaam: ${achternaam}, 
    Leeftijd: ${leeftijd}, 
    Postcode: ${postcode}, 
    Bezorg: ${bezorg},
    Tijd: ${tijd},
    Opmerkingen: ${message},
    Voorwaarden: ${voorwaard}
    `);
        console.log(`Aardbeiden: ${countArdbei}, Bananen: ${countBananen}, Appels: ${countAppels}, Kiwi's: ${countKiwis}`);
    }
    return (
        <>
            <section className="container">
            <Counter
                fruitName="🍓 Aardbeien"
                type="button"
                className="btn"
                fruitValue={countArdbei}
                increment={() => setCountArdbei(countArdbei => countArdbei + 1)}
                decrement={() => setCountArdbei(countArdbei => countArdbei - 1)}
                isDisabled={countArdbei === 0}
            />
            </section>
            <section className="container">
            <Counter
                fruitName="🍌 Bananen"
                type="button"
                className="btn"
                fruitValue={countBananen}
                increment={() => setCountBananen(countBananen => countBananen + 1)}
                decrement={() => setCountBananen(countBananen => countBananen - 1)}
                isDisabled={countBananen === 0}
            />
            </section>
            <section className="container">
            <Counter
                fruitName="🍏 Appels"
                type="button"
                className="btn"
                fruitValue={countAppels}
                increment={() => setCountAppels(countAppels => countAppels + 1)}
                decrement={() => setCountAppels(countAppels => countAppels - 1)}
                isDisabled={countAppels === 0}
            />
            </section>
            <section className="container">
            <Counter
                fruitName="🥝 Kiwis"
                type="button"
                className="btn"
                fruitValue={countKiwis}
                increment={() => setCountKiwis(countKiwis => countKiwis + 1)}
                decrement={() => setCountKiwis(countKiwis => countKiwis - 1)}
                isDisabled={countKiwis === 0}
            />
            </section>
            <Button type="button" className="btn_reset" onClick={resetBtn}>Reset</Button>

            <form onSubmit={handleChange}>
                <Formulier
                        type="text"
                        name="voornaam"
                        label="Voor Naam"
                        value={voornaam}
                        onChange={setVoornaam}
                    />
                    <Formulier
                        type="text"
                        name="achternaam"
                        label="Achter Naam"
                        value={achternaam}
                        onChange={setAchternaam}
                    />
                <Formulier
                        type="text"
                        name="leeftijd"
                        label="Leeftijd"
                        value={leeftijd}
                        onChange={setLeeftijd}
                    />
                <Formulier
                        type="text"
                        name="postcode"
                        label="Post Code"
                        value={postcode}
                        onChange={setPostcode}
                    />
                <label htmlFor="bezorg">Bezorg Frequentie</label>
                <select name="bezorg"
                        label="Bezorg Frequentie"
                        value={bezorg}
                        onChange={(e) => toggleBezorg(e.target.value)}
                >
                    <option value="iederweek">Ieder Week</option>
                    <option value="omweek">Om de week</option>
                    <option value="maand">Iedere maand</option>
                </select>

                <label htmlFor="overdag">Overdag</label>
                <input type="radio"
                       label="Tijd Vak"
                       name="overdag"
                       value="overdag"
                       checked={tijd === 'overdag'}
                       onChange={(e) => toggleTijd(e.target.value)}
                        />
                <label htmlFor="savonds">'sAvonds'</label>
                <input type="radio"
                       id="savonds"
                       name="savonds"
                       value="savonds"
                checked={tijd === 'savonds'}
                       onChange={(e) => toggleTijd(e.target.value)}
                />
                <p></p>

                <label htmlFor="message">Opmerking</label>
                <textarea
                        name="message"
                        label="Opmerking"
                        rows="4"
                        cols="40"
                        placeholder="Laat je bericht achter"
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                <input
                        type="checkbox"
                       name="voorwaard"
                       label="Ik ga akkord met voorwaarden"
                       value={voorwaard}
                        onChange={(e) => setVoorwaard(e.target.checked)}
                />
                <label>Ik ga akkord met voorwaarden</label>
<p></p>
                <Button type="submit" >
                    Versturen
                </Button>
                <p></p>
            </form>

        </>
    );
}
export default App;