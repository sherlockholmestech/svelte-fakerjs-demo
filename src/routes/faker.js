import { faker } from '@faker-js/faker';

let seed = Math.floor(Math.random() * 1000000);
function createPerson(){
    seed = Math.floor(Math.random() * 1000000);
    return {
        _id: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        sex: faker.name.sexType(),
        phoneImei: faker.phone.imei(),
        phone: faker.phone.number(),
    }
}

export { createPerson };
