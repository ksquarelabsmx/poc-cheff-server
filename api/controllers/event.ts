import chalk from "chalk";
import * as Debug from "debug";
import { Request, Response, NextFunction } from "express";

import { uriBuilder } from "./../utils";
import { response } from "./../utils";
import { eventMapper } from "./../mappers";
import { eventRepository } from "./../repository";
import { event } from "./../interfaces";

const debug = Debug("chef:events:controller:events");

const eventStrategy = (eventRepository: any, query: string = "") => {
  switch (query) {
    case "current": {
      return eventRepository.getCurrentEvents();
    }
    case "past": {
      return eventRepository.getPastEvents();
    }
    default: {
      return eventRepository.getEvents();
    }
  }
};

const getEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    debug(`EventController: ${chalk.green("getting event")}`);

    const id = req.params.eventId;
    const source: string = uriBuilder(req);
    const event = await eventRepository.getEventById(id);

    res.send(response.success(event, 200, source));
  } catch (err) {
    debug(`getEvents Controller Error: ${chalk.red(err.message)}`);
    next(err);
  }
};

const getEvents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    debug(`EventController: ${chalk.green("getting events")}`);

    const query = req.query.type;
    const source: string = uriBuilder(req);
    const events = await eventStrategy(eventRepository, query);

    res.send(response.success(events, 200, source));
  } catch (err) {
    debug(`getEvents Controller Error: ${chalk.red(err.message)}`);
    next(err);
  }
};

const updateEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    debug(`EventController: ${chalk.green("getting events")}`);

    const source: string = uriBuilder(req);
    const event: event.IEvent = eventMapper.toEntity({
      id: req.params.id,
      ...req.body
    });
    const updatedEvent = await eventRepository.updateEvent(event);
    const eventDTO: event.IEventDTO = eventMapper.toDTO(updatedEvent);

    res.send(response.success(eventDTO, 201, source));
  } catch (err) {
    debug(`updateEvent Controller Error: ${chalk.red(err.message)}`);
    next(err);
  }
};

const createEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    debug(`EventController: ${chalk.green("creating events")}`);

    const source: string = uriBuilder(req);
    const event: event.IEvent = eventMapper.toEntity(req.body);
    const createdEvent = await eventRepository.createEvent(event);
    const eventDTO: event.IEventDTO = eventMapper.toDTO(createdEvent);

    res.send(response.success(eventDTO, 201, source));
  } catch (err) {
    debug(`createEvent Controller Error: ${chalk.red(err.message)}`);
    next(err);
  }
};

export const eventController = {
  getEvents,
  getEvent,
  createEvent,
  updateEvent
};
