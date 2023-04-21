import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./interface/user.interface";
import {  } from "./dto/user.dto";

@Injectable()
export class UserService {}
