import { faker } from "@faker-js/faker";

export function testData() {

    return{
        firstName: faker.person.firstName,
        lastName: faker.person.lastName,
        postalCode: faker.location.zipCode,
        firstItemLocatorName: 'sauce-labs-backpack',
        firstItemName: 'Sauce Labs Backpack',
        thankYouMesage: 'Thank you for your order!',
        removeButton: 'Remove'
    }
    
}