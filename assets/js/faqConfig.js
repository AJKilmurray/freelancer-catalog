/* Blueprint 
    {
        id: integer, // Not Iterated, is used for reference
        title: 'Question',
        answer: 'Answer to Question'
    },
*/

export const questions = [
    {
        id: 1,
        title: 'How do I place an order?',
        answer: 'To place an order, please head on over to our discord server located <a href="https://discord.gg/pV25ZEgNTb" target="_blank">here</a>. From there, you will need to open a ticket by heading over to the channel named "<span class="highlight">Ticket Creation</span>". Once you have opened a ticket, you will go through a series of proposed questions by our bot. Some of these questions include the following: <span class="highlight-white">"What is your deadline?"</span>, "<span class="highlight-white">What is your budget?</span>", "<span class="highlight-white">Do you have any reference images?</span>" Once you have gone through that part of the process, your commission details will be sent off to our freelancers to send a quote in response. If our freelancers have any questions, you will receive them through our bot. Quotes sent by our freelancers will contain a set price, and an optional deadline/note.',
        category: 'Tickets'
    },
    {
        id: 2,
        title: 'What\'s the difference between builder and builder+?',
        answer: 'The builders on our team are all talented individuals, but there will always be certain individuals that have more experience, and exposure to more complex project creations. This made us realise that we should give clients an option to select from our best builders. The budget for builder+ starts at <span class="highlight">$250</span>, whereas the budget for builder starts at <span class="highlight">$50</span>.',
        category: 'Roles'
    },
    {
        id: 3,
        title: 'What payment options do you support?',
        answer: 'We currently support Paypal and card payments! All invoices are generated using Paypal\'s API.',
        category: 'Payment'
    },
    {
        id: 4,
        title: 'How do I view the logs of my archived ticket?',
        answer: 'Once a ticket has been archived, you will be able to view the entire log of your ticket within our archive panel, which can be found <a href="https://archive.seniorteam.net/" target="_blank">here</a>. You will need to login using the discord account that you used during the duration of the ticket.',
        category: 'Tickets'
    },
    {
        id: 5,
        title: 'What are the requirements for Notable Client?',
        answer: 'In order to become a notable client, you must first become a VIP. VIP\'s here at Senior Team are individuals that have over <span class="highlight">100,000</span> followers on a social media platform, or are a well-known figure (Server owner, business owner, etc). VIP users that then go on to order from us are given the status of <span class="highlight">Notable Client</a>.',
        category: 'Roles'
    },
]