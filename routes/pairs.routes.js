

const express = require('express')
const router = express.Router()
const pairController = require('../controllers/pairs')

// routes/pairs.routes.js


/**
 * @swagger
 * /tickers:
 *   get:
 *     summary: Retrieve a list of trading pairs of Voltswap dex.
 *     description: Retrieve a list of trading pairs of Voltswap dex.
 *     responses:
 *       200:
 *         description: A list of trading pairs.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       base_id:
 *                         type: string
 *                         description: Token 0 id.
 *                       base_name:
 *                         type: string
 *                         description: Token 0 name.
 *                       base_symbol:
 *                         type: string
 *                         description: Token 0 symbol.
 *                       quote_id:
 *                         type: string
 *                         description: Token 1 id.
 *                       quote_name:
 *                         type: string
 *                         description: Token 1 name.
 *                       quote_symbol:
 *                         type: string
 *                         description: Token 1 symbol.  
 *                       last_price:
 *                         type: number
 *                         description: Token 0 price.  
 *                       base_volume:
 *                         type: string
 *                         description: Token 0 volume.  
 *                       quote_volume:
 *                         type: string
 *                         description: Token 1 volume.     
 */

router.get('/', pairController.getPairs)

module.exports = router