import React, { useState } from "react";
import config from "../config.json";
import Menu from "../src/components/Menu"
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledHeader } from "../src/components/Header";
import { StyledFav } from "../src/components/Favorites";

function HomePage() {

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [theme, setTheme] = useState("light");

    return (
        <>
            <CSSReset />
            <div className={`HomePage ${theme}`}>
                <Menu theme={theme} setTheme={setTheme} valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header theme={theme} setTheme={setTheme} />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
                {/* <Favorites favorites={config.favorites} /> */}
            </div>
        </>
    );
}

export default HomePage

function Header() {
    return (
        <StyledHeader>
            <div className="crop">
                <img className="banner" src={config.banner} />
            </div>
            <section className="user-info">
                <img className="user-avatar" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}

function Timeline({searchValue, ...props}) {
    const playlistNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistNames) => {
                const videos = props.playlists[playlistNames];
                return (
                    <section key={playlistNames}>
                        <h2>{playlistNames}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const seachValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(seachValueNormalized)
                                }).map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span className="video-title">
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

// function Favorites(props) {
//     const favoritos = Object.keys(props.favorites);
//     // console.log(favoritos);
//     return (
//         <StyledFav>
//             <section>
//                 <h2>AluraTubes Favoritos</h2>
//                 <div>
//                     {favoritos.map((fav) => {
//                         const pessoas = props.favorites[fav];
//                         // console.log("fav", pessoas);
//                         return (
//                             <div className="fav-cards">
//                                 {(
//                                     <a href={`https://github.com/${pessoas.avatar}`}>
//                                         <img className="favorites-avatar" src={`https://github.com/${pessoas.avatar}.png`} />
//                                         <span>
//                                             {pessoas.name}
//                                         </span>
//                                     </a>
//                                 )}
//                             </div>
//                         )
//                     })}
//                 </div>
//             </section>
//         </StyledFav>
//     )
// }