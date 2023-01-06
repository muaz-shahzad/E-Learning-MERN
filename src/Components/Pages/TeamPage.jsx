import React from 'react'
import TeamP from '../Client/Team/TeamP'
import Head from '../Client/Head/Head'
import Header from '../Client/Header/Header'
import Footer from '../Client/Footer/Footer'
import TeamCard from '../Client/Team/TeamCard'
import Team from '../Client/Team/Team'

function TeamPage({ setLoginUser, Username }) {
    return (
        <>
            <Head
                setUser1={setLoginUser}
                Username={Username}
            />
            <Header />
            <TeamP />
            <Footer />
        </>
    )
}



export default TeamPage