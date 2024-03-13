// to handle the DB related functions, we're writing a one-time wrapper function to avoid writing their handelling code everytime
// WE'LL use this everywhere and it'll make our life easy //
const asyncHandler = (requestHandler) => async (req, res, next) => {
    try {
        await requestHandler(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message,
        });
    }
};
export default asyncHandler;

// // Another way: 
// const asyncHandler = (requestHandler) => (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
// };
