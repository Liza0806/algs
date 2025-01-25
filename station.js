class PowerStation {
  constructor(batteryCapacity, maximumInput, maximumOutput) {
    // Implement constructor
    this.maximumBatteryCapacity = batteryCapacity;
    this.currentCharge = batteryCapacity;
    this.maximumInput = maximumInput;
    this.maximumOutput = maximumOutput;
    this._devices = {};
    this._timers = {};
    this._overload = false;
    this._charging = null;
    this._totalOutputPower = 0;
    this._timeRemaining = this.currentCharge / (this._totalOutputPower || 1);
    this.timeToFullDischarge =
      this.currentCharge / (this._totalOutputPower || 1);
  }

  updateInput(voltage, current) {
    if (voltage > this.maximumInput) {
      this._overload = true;
      return "too powerful input";
    }

    this._overload = false;

    if (this._chargingInterval) {
      clearInterval(this._chargingInterval);
    }

    this._charging = {
      voltage: voltage,
      current: current,
      time: 0,
    };

    this._chargingInterval = setInterval(() => {
      this._charging.time += 1;

      const chargeToAdd = voltage * current * (1 / 60);
      if (this.currentCharge + chargeToAdd < this.maximumBatteryCapacity) {
        this.currentCharge += chargeToAdd;
      } else {
        this.currentCharge = this.maximumBatteryCapacity;
        clearInterval(this._chargingInterval);
        this._charging = null;
        console.log("Battery fully charged");
      }
    }, 60000);
  }
  get chargeLevel() {
    return this.currentCharge;
  }

  connectOutput(outputId) {
    if (
      this._devices[outputId] &&
      this._devices[outputId].voltage !== 0 &&
      this._devices[outputId].current !== 0
    ) {
      this._timers[outputId] = setInterval(() => {
        this._devices[outputId].time += 1;
      }, 60000);
    } else {
      this._devices = {
        ...this._devices,
        [outputId]: { voltage: 0, current: 0, time: 0 },
      };
    }
  }
  get devices() {
    return this._devices;
  }

  updateOutput(outputId, voltage, current) {
    if (!this._devices[outputId]) {
      this._devices[outputId] = { voltage: 0, current: 0, time: 0 };
    }

    this._devices[outputId].voltage = voltage;
    this._devices[outputId].current = current;

    this.calculateTotalOutputPower();
  }

  disconnectOutput(outputId) {
    if (this._devices[outputId]) {
      if (this._timers[outputId]) {
        clearInterval(this._timers[outputId]);
        delete this._timers[outputId];
      }
      delete this._devices[outputId];
      console.log(`Device ${outputId} disconnected.`);
    } else {
      console.log(`Device ${outputId} was not found to disconnect`);
    }
    this.calculateTotalOutputPower();
  }
  calculateTotalOutputPower() {
    let power = 0;
    Object.values(this._devices).forEach((device) => {
      if (device.voltage && device.current) {
        power += device.voltage * device.current;
      }
    });
    this._totalOutputPower = power;
  }

  updateBatteryLevel(capacityLeft) {
    this.currentCharge = capacityLeft;
  }

  get batteryPercentage() {
    return ((this.currentCharge / this.maximumBatteryCapacity) * 100).toFixed(
      1
    );
  }

  get totalOutputPower() {
    this._totalOutputPower = Object.values(this._devices).reduce(
      (sum, d) => sum + d.current * d.voltage,
      0
    );
    return this._totalOutputPower;
  }
  get timeRemaining() {
    if (this.currentCharge > 0 && this.totalOutputPower > 0) {
      this.timeToFullDischarge = this.currentCharge / this.totalOutputPower;
      let hours = Math.floor(this.timeToFullDischarge);
      if (hours < 10) {
        hours = "0" + hours.toString();
      }

      const minutes = Math.floor(
        (this.timeToFullDischarge - Math.floor(this.timeToFullDischarge)) * 60
      );

      return `${hours}:${minutes.toString().padStart(2, "0")}`;
    } else {
      console.log("No current charge or output power available");
      return "N/A";
    }
  }

  get status() {
    if (this._overload) {
      return "overload";
    }
    if (this._charging) {
      return "charging";
    }
    if (this._dischargeInterval) {
      return "discharging";
    }
    return "idle";
  }
}