export class RestaurantProfile{

    username:string;
    email:string;
    role:string;
    restaurantName:string;
    mobile:string;
    address:string;
    location:string;
    certificateNo:string;
    certificateName:string

    constructor(username, email, role, restaurantName, mobile, address, location, certificateNo,certificateName){
        this.username = username;
        this.email = email;
        this.role = role;
        this.restaurantName = restaurantName;
        this.mobile = mobile;
        this.address = address;
        this.location = location;
        this.certificateNo = certificateNo;
        this.certificateName = certificateName;
    }
}