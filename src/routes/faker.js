import { faker } from '@faker-js/faker';

let seed = faker.datatype.number();
function createPerson(){
    seed = faker.datatype.number();
    faker.seed(seed);
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
