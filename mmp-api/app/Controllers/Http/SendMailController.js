'use strict'

const kue = use('Kue')
const Job = use('App/Jobs/SendMailJob')

class SendMailController {


    async index ({ request, response, view }) {

        const headers = request.headers(); 
        
        const data = { test: 'data' } // Data to be passed to job handle
        const priority = 'normal' // Priority of job, can be low, normal, medium, high or critical
        const attempts = 1 // Number of times to attempt job if it fails
        const remove = true // Should jobs be automatically removed on completion
        const jobFn = job => { // Function to be run on the job before it is saved
          job.backoff()
        }
        console.log('#### chamando index')
        const job = kue.dispatch(Job.key, headers, { priority, attempts, remove, jobFn })
        
        response.json(job)

    }
  
}

module.exports = SendMailController
