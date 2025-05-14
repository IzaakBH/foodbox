# Foodbox

An app designed to aid with the administration of a "Food Box" scheme, such as that run by the [Granville Community Kitchen](https://granvillecommunitykitchen.org.uk/good-food-box/)

## Planned Features

### Supplier Management
A sort of contact book containing details of suppliers
A record of foods each supplier provides
The boxes they are supplying & the specific itms
A system to track orders from suppliers.

### Customer Management
A system to onboard new customers
A system to track customers & the products they are subscribed to
Tracking payments, both cash, card and direct debit
A system to allow customers to cancel boxes
A system to track where and when customers plan to collect a box

### Communications
A system to manage communicating the contents of each food box to a each customer
A system to communicate outstanding balances to customers
A system to notify of planned changes to a customer's schedule (e.g. changed pickup day or cancelled box)

## Design
The project has been bootstrapped with [T3](t3.gg).
It uses NextJs, tRPC, Typescript, NextAuth.js, Prisma, PostgreSQL and Tailwind.

I plan to use shadcn for easy components.

### Frontend
The frontend will be split into two main systems...

#### Customer Portal
- Onboarding
- Subscription management

#### Admin Portal
- Box administration
- Ordering
- Billing

### Backend
Comprises of a single service due to level of load.

Data stored in PostgreSQL

More to come
