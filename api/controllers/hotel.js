import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
export const createHotel = async (req, res, next) => {    
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)

    } catch (err) {
        next(err)
    }
}

export const updateHotel = async (req, res, next) => {    
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { $new: true })
        res.status(200).json(updateHotel)

    } catch (err) {
        next(err);
    }
}

export const deleteHotel = async (req, res, next) => {    
    try {
        await Hotel.findByIdAndRemove(req.params.id);
        res.status(200).json("Hotel has been deleted!")

    } catch (err) {
        next(err);
    }
}

export const getHotel = async (req, res, next) => {    
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)

    } catch (err) {
        next(err);
    }
}

export const getAllHotels = async (req, res, next) => {    

    // if(failed) return next(createError(401, "You're not authenticated!"));
    try {
        // const hotel = await Hotel.find(req.params.id)
        const hotels = await Hotel.find();
        res.status(200).json(hotels)

    } catch (err) {
        next(err);
    }
}

export const countByCity = async (req, res, next) => {    
    const cities = req.query.cities.split(",");

    // if(failed) return next(createError(401, "You're not authenticated!"));
    try {
        // const hotel = await Hotel.find(req.params.id)
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)

    } catch (err) {
        next(err);
    }
}

export const countByType = async (req, res, next) => {    

    // if(failed) return next(createError(401, "You're not authenticated!"));
    try {
        // const hotel = await Hotel.find(req.params.id)
        const hotels = await Hotel.find();
        res.status(200).json(hotels)

    } catch (err) {
        next(err);
    }
}