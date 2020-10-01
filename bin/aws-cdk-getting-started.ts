#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkGettingStartedStack } from '../lib/aws-cdk-getting-started-stack';

const app = new cdk.App();
new AwsCdkGettingStartedStack(app, 'AwsCdkGettingStartedStack');
