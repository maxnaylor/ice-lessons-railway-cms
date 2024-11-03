import type { Attribute, Schema } from '@strapi/strapi';

export interface ConversationBlocksConversationBlock extends Schema.Component {
  collectionName: 'components_conversation_blocks_conversation_blocks';
  info: {
    description: '';
    displayName: 'Conversation Block';
    icon: 'microphone';
  };
  attributes: {
    content: Attribute.Blocks;
    speaker: Attribute.String;
  };
}

export interface CourseCardsCourseFeatureRows extends Schema.Component {
  collectionName: 'components_course_cards_course_feature_rows';
  info: {
    displayName: 'Course Feature Rows';
    icon: 'check';
  };
  attributes: {
    feature: Attribute.Text;
  };
}

export interface ExerciseBlocksGapFilling extends Schema.Component {
  collectionName: 'components_exercise_blocks_gap_fillings';
  info: {
    description: '';
    displayName: 'Gap Filling';
    icon: 'book';
  };
  attributes: {
    rows: Attribute.Component<'exercise-blocks.gap-filling-row', true>;
  };
}

export interface ExerciseBlocksGapFillingRow extends Schema.Component {
  collectionName: 'components_exercise_blocks_gap_filling_rows';
  info: {
    displayName: 'Gap Filling Row';
    icon: 'bulletList';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface LessonPageBlocksCallout extends Schema.Component {
  collectionName: 'components_lesson_page_blocks_callouts';
  info: {
    displayName: 'Callout';
    icon: 'message';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    type: Attribute.Enumeration<['tip', 'task']>;
  };
}

export interface LessonPageBlocksConversation extends Schema.Component {
  collectionName: 'components_lesson_page_blocks_conversations';
  info: {
    description: '';
    displayName: 'Conversation';
    icon: 'quote';
  };
  attributes: {
    audio: Attribute.Media<'audios', true>;
    row: Attribute.Component<'conversation-blocks.conversation-block', true>;
  };
}

export interface LessonPageBlocksParagraph extends Schema.Component {
  collectionName: 'components_lesson_page_blocks_paragraphs';
  info: {
    description: '';
    displayName: 'Paragraph';
    icon: 'file';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface LessonPageBlocksVerb extends Schema.Component {
  collectionName: 'components_lesson_page_blocks_verbs';
  info: {
    displayName: 'Verb';
    icon: 'walk';
  };
  attributes: {
    firstPlu: Attribute.String;
    firstSing: Attribute.String;
    infinitive: Attribute.String;
    secondPlu: Attribute.String;
    secondSing: Attribute.String;
    thirdPlu: Attribute.String;
    thirdSing: Attribute.String;
  };
}

export interface LessonPageBlocksVocabBlock extends Schema.Component {
  collectionName: 'components_lesson_page_blocks_vocab_blocks';
  info: {
    description: '';
    displayName: 'Tile Block';
    icon: 'layer';
  };
  attributes: {
    columns: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    hero: Attribute.Boolean & Attribute.DefaultTo<false>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageSize: Attribute.Enumeration<['large', 'medium', 'small']> &
      Attribute.DefaultTo<'large'>;
    row: Attribute.Component<'vocab-blocks.audio-row', true>;
    vAlign: Attribute.Enumeration<['top', 'center', 'bottom']>;
  };
}

export interface VocabBlocksAudioRow extends Schema.Component {
  collectionName: 'components_vocab_blocks_audio_rows';
  info: {
    description: '';
    displayName: 'Audio Row';
    icon: 'microphone';
  };
  attributes: {
    audio: Attribute.Media<'audios'>;
    column: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    content: Attribute.Blocks;
    gap: Attribute.Boolean & Attribute.DefaultTo<false>;
    image: Attribute.Media<'images'>;
    imageSize: Attribute.Enumeration<['large', 'medium', 'small']> &
      Attribute.DefaultTo<'medium'>;
    isCentred: Attribute.Boolean & Attribute.DefaultTo<false>;
    isColumn: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface VocabBlocksContent extends Schema.Component {
  collectionName: 'components_vocab_blocks_contents';
  info: {
    displayName: 'content';
    icon: 'quote';
  };
  attributes: {};
}

export interface VocabBlocksSimple extends Schema.Component {
  collectionName: 'components_vocab_blocks_simples';
  info: {
    displayName: 'Simple';
    icon: 'write';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'conversation-blocks.conversation-block': ConversationBlocksConversationBlock;
      'course-cards.course-feature-rows': CourseCardsCourseFeatureRows;
      'exercise-blocks.gap-filling': ExerciseBlocksGapFilling;
      'exercise-blocks.gap-filling-row': ExerciseBlocksGapFillingRow;
      'lesson-page-blocks.callout': LessonPageBlocksCallout;
      'lesson-page-blocks.conversation': LessonPageBlocksConversation;
      'lesson-page-blocks.paragraph': LessonPageBlocksParagraph;
      'lesson-page-blocks.verb': LessonPageBlocksVerb;
      'lesson-page-blocks.vocab-block': LessonPageBlocksVocabBlock;
      'vocab-blocks.audio-row': VocabBlocksAudioRow;
      'vocab-blocks.content': VocabBlocksContent;
      'vocab-blocks.simple': VocabBlocksSimple;
    }
  }
}
