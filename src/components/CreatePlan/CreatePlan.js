import React from 'react'
import CreatePlanHero from './CreatePlanHero'
import CreatePlanQuiz from './CreatePlanQuiz'
import CreatePlanSteps from './CreatePlanSteps'

export default function CreatePlan() {
  return (
    <div>
      <CreatePlanHero/>
      <CreatePlanSteps/>
      <CreatePlanQuiz/>
    </div>
  )
}
