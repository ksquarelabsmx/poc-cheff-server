"use strinct";

/**
 * author: ivan sabido
 * date: 26/12/2018
 * email: <ivan.sabido@ksquareinc.com>
 * description:
 */

const debug = require("debug")("chef:orders:controller:orders");
const chalk = require("chalk");
const orderService = require("../services/order");
const response = require("../utils/response");
const uri = require("../utils/uri");
const boom = require("boom");

const getOrders = async (req, res, next) => {
  try {
    debug(`OrderController: ${chalk.green("getting orders")}`);
    let source = uri.getURI(req.protocol, req.originalUrl, req.get("host"));
    let orders = await orderService.getOrders();
    res.send(response.success(orders, 200, source));
  } catch (err) {
    debug(`getOrders Controller Error: ${chalk.red(err.message)}`);
    next(err);
  }
};

const handleAction = async (req, res, next) => {
  try {
    debug(`OrderCOntroller: ${chalk.green("paying orders")}`);
    let source = uri.getURI(req.protocol, req.originalUrl, req.get("host"));
    let action = req.body.action;
    switch (action) {
      case "mark_as_paid": {
        const results = await orderService.markManyAsPaid(req.body.ids);
        res.send(response.success(results, 200, source));
      }
    }
  } catch (err) {
    debug(`handleAction Controller Error: ${chalk.red(err.message)}`);
    next(err);
  }
};

module.exports = {
  getOrders,
  handleAction
};
