import { allEvents } from "./allEvents.js";
import { createEvents } from "./createEvents.js";
import { addAvailability } from "./addAvailability.js";
import { editEvent } from "./editEvent.js";
allEvents();
document.getElementById('createEvent').addEventListener('click', createEvents);
document.getElementById('addAvailability+').addEventListener('click', () => addAvailability(true));
document.getElementById('addAvailability-').addEventListener('click', () => addAvailability(false));
document.getElementById('editEvent').addEventListener('click', editEvent);