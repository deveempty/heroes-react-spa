import { useMemo } from 'react'
import { getHerosByPublisher } from '../helpers'
import { HeroCard } from './'


export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHerosByPublisher(publisher), [publisher]) 
    
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map(hero => (
                <HeroCard 
                key={hero.id} 
                {...hero} // take properties from hero to spread into HeroCard 
                />
            ))            
        }
    </div>
  )
}
