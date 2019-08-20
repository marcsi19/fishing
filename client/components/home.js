import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ImageGallery from 'react-image-gallery'
import {fetchGallery} from '../store/gallery'

export class Home extends Component {
  componentDidMount() {
    this.props.fetchGallery()
  }
  render() {
    const gallery = this.props.gallery || []
    const images2 = []
    gallery.filter(elem => elem.homepage).map(pic => {
      images2.push({original: pic.imageUrl})
    })

    // const images = [
    //   {
    //     original: 'fishing2.jpg'
    //   },
    //   {
    //     original: 'fishing1.jpg'
    //   },
    //   {
    //     original: 'fishing3.jpg'
    //   }
    // ]
    return (
      <div>
        <div className="slide-showing" id="introduction">
          <div className="slide-showing-intro">
            <a href="#features">Bemutatkozás</a>
          </div>
          <ImageGallery
            items={images2}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            // autoPlay={true}
          />
        </div>
        <div id="features" className="features">
          <h3>Bemutatkozás</h3>
          <p>
            Úgy tartom, a multiorsós pergetés egyfajta hobbi a hobbin belül;
            azon túl, hogy pecázunk, a dobások gyakorlata önmagában is képes
            örömet okozni. Aki egyszer ráérzett az ízére, tudja miről beszélek.
          </p>

          <p>
            Alapvetően nem az számít, milyen kategóriájú eszközöket használunk,
            ha állapotuk megfelelő, beállításukat összhang jellemzi,
            felhasználásuk a teljesítményük figyelembevételével történik,
            fantasztikus élményt képesek nyújtani.
          </p>
          <p>
            De mi van akkor, ha a teljesítmény növelhető? Ha egy-egy módszerre
            az összeállításunk sokkal inkább kihegyezhető, mint hinnénk? Számos
            rész alkotja felszerelésünk egészét úgy, mint bot, orsó, zsinór,
            csalik, de még az apróságok is befolyásolhatják napunk sikerét
            (kapcsok, előkék, stb.).
          </p>
          <p>
            Vannak, akik bámulatos érzékkel építenek, vagy építenek át
            horgászbotokat, hogy azok a lehető legideálisabb módon használják ki
            a blankban rejlő tartalékokat dobáskor és fárasztáskor egyaránt. Mi
            horgászorsókat igyekszünk jobbá, hatékonyabbá, kezesebbé tenni. -
            hogy pontos legyek multiplikátoros orsókat, ahogy összefoglalólag
            nevezzük a nem csak a zsinórtömeg tárolására alkalmas darabokat
            (minden olyan orsó multiplikál, ami a kar egyetlen tekerésre
            legalább két menet zsinórt visz a dobra, de nem összevonandó azonban
            a "peremfutók" családjával).
          </p>
          <p>
            A színek, minták, de még sok esetben a technikai megoldások
            megítélése is szubjektív, hiszen különbözőek vagyunk megannyian
            saját ízlésvilággal. Kész munkáink vagy a megrendelők elképzeléseit,
            vagy saját ötleteinket, lehetőségeinket tükrözik. Közös és abszolút
            dogmatikus tény azonban mindben, hogy a minőség elérhető legmagasabb
            fokára törekedtünk a munka során.
          </p>

          <p>
            Mindezek után fogadjátok szeretettel az oldalon összegzett anyagot,
            leljétek benne örömötöket, ahogy tesszük mi is minden új orsó
            alkalmával!
          </p>
          <div className="slide-showing-intro">
            <a href="#introduction">Lap tetejére</a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  gallery: state.gallery.gallery
})

const mapDispatchToProps = dispatch => ({
  fetchGallery: () => dispatch(fetchGallery())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))

// export default Home
