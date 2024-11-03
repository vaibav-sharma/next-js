import { useState } from 'react';
import { initialTravelPlan } from '../../places';

function TravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan)
    //flattened object will become dictionary
    const planet = plan[0]
    const handleChange = (parentId, Id) => {
        let newChildren = plan[parentId].childIds.filter(id => id !== Id)
        console.log({ newChildren })
        let newObj = plan[parentId]
        newObj = {...newObj, childIds: newChildren}
        setPlan({ ...plan, [parentId]: newObj })
        console.log({ plan })
    }

    return (
        <div>
            <ol>
                <Places
                    key={0}
                    ids={planet?.childIds}
                    plan={plan}
                    parentId={0}
                    onComplete={handleChange} />
            </ol>
        </div>
    )
}
export default TravelPlan

function Places({ ids, plan, parentId, onComplete }) {

    return (
        <div>
            <ol>
                {ids?.map(id => {
                    return (<>
                        <li>
                            {plan[id].title}
                            <button
                                onClick={() =>
                                    onComplete(parentId, id)
                                }>
                                Visited
                            </button>
                        </li>
                        {
                            plan[id]?.childIds?.length > 0 &&
                            <Places
                                key={id}
                                ids={plan[id].childIds}
                                plan={plan}
                                parentId={id}
                                onComplete={onComplete} />
                        }
                    </>
                    )
                })}
            </ol>
        </div>
    )
}
