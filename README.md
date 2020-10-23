<!--
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at http://mozilla.org/MPL/2.0/.
-->

# About

The Triton metadata server provides the ability to store and retrieve arbitrary key-value
pairs alongside the configuration of an instance.

The Metadata API is used to transfer data to a Triton instance. For example, the
Joyent supplied images use metadata to transfer the SSH keys stored in the
Customers API to the customer's machine, to set and generate passwords and to
execute customized user scripts.

## Interaction

There are three main ways to interact with the instance metadata:

### From inside the instance

Once metadata has been provided to the system, it can then be accessed from
within the guest instance. Joyent strongly recommends the use of the provided
command-line tools when accessing the metadata services - these tools will need
to be preinstalled into the container image. Certain Joyent public cloud images
provided through images.joyent.com already have the mdata-client tools installed
in the guest instance.

### Through CloudAPI

In a Triton cloud deployment, the customer or administrator may use CloudAPI to
query and update metadata for guest instances.

### Using vmadm/vmapi

On a compute node a Triton operator may inspect or update metadata values using
[vmadm(1M)](https://github.com/joyent/smartos-live/blob/master/src/vm/man/vmadm.1m.md),
or use VMAPI to inspect and control metadata as part of the instance settings.

# License

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Contributing

This repository is part of the Joyent Triton project. See the [contribution
guidelines](https://github.com/joyent/triton/blob/master/CONTRIBUTING.md) --

# References

* [Metadata API](https://docs.joyent.com/private-cloud/instances/using-mdata)
* [Protocol](https://eng.joyent.com/mdata/protocol.html)
