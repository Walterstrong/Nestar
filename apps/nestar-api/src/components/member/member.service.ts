import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {
	constructor(@InjectModel('Member') private readonly memberModel: Model<null>) {}
	public async signup(): Promise<string> {
		console.log('MemberService signup');
		return 'signup executed!';
	}

	public async login(): Promise<string> {
		console.log('MemberService login');
		return 'login executed!';
	}

	public async updateMember(): Promise<string> {
		console.log('MemberService updateMember');
		return 'updateMember executed!';
	}

	public async getMember(): Promise<string> {
		console.log('MemberService getMember');
		return 'getMember executed!';
	}
}
