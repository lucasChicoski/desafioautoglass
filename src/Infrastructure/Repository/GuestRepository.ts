


// export default class GuestRepositoryPisma implements IGuestRepository {

//     constructor() { }
//     async findAllGuest(): Promise<GuestModel[]> {
//         try {
//             const response = await prisma.guest.findMany({
//                 where: {
//                     confirmed: false
//                 }
//             })
//             return response
//         } catch (error) {
            
//             throw error
//         }

//     }
//     findGuestById(id: number): Promise<GuestModel> {
//         throw new Error("Method not implemented.");
//     }
//     async updateGuest(guest: GuestModel): Promise<GuestModel> {
        
//         const response = await prisma.guest.update({
//             where: {
//                 id: guest.id
//             },
//             data: {
//                 confirmed: guest.confirmed,
//                 id: guest.id,
//                 name: guest.name
//             }
//         })

//         return response
//     }
// }