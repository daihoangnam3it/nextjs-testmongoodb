import connectDB from '../../lib/mongodb'
export default async function handler(req, res) {
  const {db} = await connectDB();
  const collection =await db.collection('listingsAndReviews').find({}).limit(20).toArray();
  res.json(collection)
}