import { useState } from 'react'
import {
  FloatingDesignMenu,
  type DesignOption,
} from './components/FloatingDesignMenu'
import { Design1 } from './designs/design1/Design1'
import { Design2 } from './designs/design2/Design2'
import { Design3 } from './designs/design3/Design3'
import { Design4 } from './designs/design4/Design4'
import { Design5 } from './designs/design5/Design5'
import { Design6 } from './designs/design6/Design6'

export default function App() {
  const [design, setDesign] = useState<DesignOption>(1)

  return (
    <>
      {design === 1 && <Design1 />}
      {design === 2 && <Design2 />}
      {design === 3 && <Design3 />}
      {design === 4 && <Design4 />}
      {design === 5 && <Design5 />}
      {design === 6 && <Design6 />}

      <FloatingDesignMenu value={design} onChange={setDesign} />
    </>
  )
}
