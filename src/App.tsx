import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { MoonPage } from './pages/MoonPage';
import { MarsPage } from './pages/MarsPage';
import { DeepSpacePage } from './pages/DeepSpacePage';

// Import individual Moon pages
import { Surveyor1Page } from './pages/moon/Surveyor1Page';
import { Surveyor3Page } from './pages/moon/Surveyor3Page';
import { Surveyor567Page } from './pages/moon/Surveyor567Page';
import { ClementinePage } from './pages/moon/ClementinePage';
import { Apollo15LrvPage } from './pages/moon/Apollo15LrvPage';
import { Apollo16LrvPage } from './pages/moon/Apollo16LrvPage';
import { Apollo17LrvPage } from './pages/moon/Apollo17LrvPage';

// Import individual Mars pages
import { Mariner6Page } from './pages/mars/Mariner6Page';
import { Mariner7Page } from './pages/mars/Mariner7Page';
import { Mariner9Page } from './pages/mars/Mariner9Page';
import { Viking1And2Page } from './pages/mars/Viking1And2Page';
import { MarsGlobalSurveyorPage } from './pages/mars/MarsGlobalSurveyorPage';
import { MarsPathfinderPage } from './pages/mars/MarsPathfinderPage';
import { MarsOdysseyPage } from './pages/mars/MarsOdysseyPage';
import { SpiritAndOpportunityPage } from './pages/mars/SpiritAndOpportunityPage';
import { MarsReconnaissanceOrbiterPage } from './pages/mars/MarsReconnaissanceOrbiterPage';
import { PhoenixMarsLanderPage } from './pages/mars/PhoenixMarsLanderPage';
import { CuriosityRoverPage } from './pages/mars/CuriosityRoverPage';
import { MavenPage } from './pages/mars/MavenPage';
import { InSightLandersPage } from './pages/mars/InSightLandersPage';
import { Mars2020Page } from './pages/mars/Mars2020Page';
import { SojournerPage } from './pages/mars/SojournerPage';
import { OpportunityPage } from './pages/mars/OpportunityPage';
import { PerseverancePage } from './pages/mars/PerseverancePage';

// Import individual Deep Space pages
import { MarinerProgramPage } from './pages/deepspace/MarinerProgramPage';
import { Pioneer10And11Page } from './pages/deepspace/Pioneer10And11Page';
import { Voyager1And2Page } from './pages/deepspace/Voyager1And2Page';
import { MessengerPage } from './pages/deepspace/MessengerPage';
import { NewHorizonsPage } from './pages/deepspace/NewHorizonsPage';
import { JunoPage } from './pages/deepspace/JunoPage';
import { OsirisRexApexPage } from './pages/deepspace/OsirisRexApexPage';
import { Tiros1Page } from './pages/deepspace/Tiros1Page';
import { HubbleTelescopePage } from './pages/deepspace/HubbleTelescopePage';
import { ChandraObservatoryPage } from './pages/deepspace/ChandraObservatoryPage';
import { KeplerTelescopePage } from './pages/deepspace/KeplerTelescopePage';
import { JamesWebbTelescopePage } from './pages/deepspace/JamesWebbTelescopePage';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    // Reset location hash on initial app load to ensure users default to the main landing page
    if (window.location.hash && !window.location.hash.startsWith('#/moon/') && !window.location.hash.startsWith('#/mars/') && !window.location.hash.startsWith('#/deep-space/')) {
      window.location.hash = '';
      setHash('');
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (hash === '#/moon') {
    return <MoonPage />;
  }

  if (hash === '#/moon/surveyor1') {
    return <Surveyor1Page />;
  }

  if (hash === '#/moon/surveyor3') {
    return <Surveyor3Page />;
  }

  if (hash === '#/moon/surveyor567') {
    return <Surveyor567Page />;
  }

  if (hash === '#/moon/clementine') {
    return <ClementinePage />;
  }

  if (hash === '#/moon/apollo15lrv') {
    return <Apollo15LrvPage />;
  }

  if (hash === '#/moon/apollo16lrv') {
    return <Apollo16LrvPage />;
  }

  if (hash === '#/moon/apollo17lrv') {
    return <Apollo17LrvPage />;
  }

  if (hash === '#/mars') {
    return <MarsPage />;
  }

  if (hash === '#/mars/mariner6') {
    return <Mariner6Page />;
  }

  if (hash === '#/mars/mariner7') {
    return <Mariner7Page />;
  }

  if (hash === '#/mars/mariner9') {
    return <Mariner9Page />;
  }

  if (hash === '#/mars/viking1and2') {
    return <Viking1And2Page />;
  }

  if (hash === '#/mars/marsglobalsurveyor') {
    return <MarsGlobalSurveyorPage />;
  }

  if (hash === '#/mars/marspathfinder') {
    return <MarsPathfinderPage />;
  }

  if (hash === '#/mars/marsodyssey') {
    return <MarsOdysseyPage />;
  }

  if (hash === '#/mars/spiritandopportunity') {
    return <SpiritAndOpportunityPage />;
  }

  if (hash === '#/mars/marsreconnaissanceorbiter') {
    return <MarsReconnaissanceOrbiterPage />;
  }

  if (hash === '#/mars/phoenixmarslander') {
    return <PhoenixMarsLanderPage />;
  }

  if (hash === '#/mars/curiosityrover') {
    return <CuriosityRoverPage />;
  }

  if (hash === '#/mars/maven') {
    return <MavenPage />;
  }

  if (hash === '#/mars/insightlanders') {
    return <InSightLandersPage />;
  }

  if (hash === '#/mars/mars2020') {
    return <Mars2020Page />;
  }

  if (hash === '#/mars/sojourner') {
    return <SojournerPage />;
  }

  if (hash === '#/mars/opportunity') {
    return <OpportunityPage />;
  }

  if (hash === '#/mars/perseverance') {
    return <PerseverancePage />;
  }

  if (hash === '#/deep-space') {
    return <DeepSpacePage />;
  }

  if (hash === '#/deep-space/marinerprogram') {
    return <MarinerProgramPage />;
  }

  if (hash === '#/deep-space/pioneer10and11') {
    return <Pioneer10And11Page />;
  }

  if (hash === '#/deep-space/voyager1and2') {
    return <Voyager1And2Page />;
  }

  if (hash === '#/deep-space/messenger') {
    return <MessengerPage />;
  }

  if (hash === '#/deep-space/newhorizons') {
    return <NewHorizonsPage />;
  }

  if (hash === '#/deep-space/juno') {
    return <JunoPage />;
  }

  if (hash === '#/deep-space/osirisrexapex') {
    return <OsirisRexApexPage />;
  }

  if (hash === '#/deep-space/tiros1') {
    return <Tiros1Page />;
  }

  if (hash === '#/deep-space/hubbletelescope') {
    return <HubbleTelescopePage />;
  }

  if (hash === '#/deep-space/chandraobservatory') {
    return <ChandraObservatoryPage />;
  }

  if (hash === '#/deep-space/keplertelescope') {
    return <KeplerTelescopePage />;
  }

  if (hash === '#/deep-space/jameswebbtelescope') {
    return <JamesWebbTelescopePage />;
  }

  return <Home />;
}
